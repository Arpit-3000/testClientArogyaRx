import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import API from "@/services/api";
import { cn } from "@/lib/utils";

// Custom Image Component with better error handling
const OrderImage = ({ src, alt, className }) => {
  const [imgSrc, setImgSrc] = useState('');
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);
  const placeholder = 'https://via.placeholder.com/100?text=No+Image';
  
  // Add base URL if the image path is relative
  const getFullUrl = (url) => {
    if (!url) return null;
    if (url.startsWith('http')) return url;
    if (url.startsWith('/')) return `${window.location.origin}${url}`;
    return `${window.location.origin}/uploads/${url}`;
  };

  useEffect(() => {
    if (!src) {
      setImgSrc(placeholder);
      return;
    }
    
    const fullUrl = getFullUrl(src);
    console.log('Loading image from:', fullUrl);
    
    const img = new Image();
    
    const handleLoad = () => {
      console.log('Image loaded successfully:', fullUrl);
      if (imgRef.current) {
        setImgSrc(fullUrl);
        setHasError(false);
      }
    };
    
    const handleError = () => {
      console.error('Failed to load image:', fullUrl);
      if (imgRef.current && !hasError) {
        setImgSrc(placeholder);
        setHasError(true);
      }
    };
    
    img.onload = handleLoad;
    img.onerror = handleError;
    img.src = fullUrl;
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={imgSrc || placeholder}
      alt={alt || 'Medicine'}
      className={className}
      onError={() => setImgSrc(placeholder)}
      loading="lazy"
    />
  );
};

const MyOrders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await API.get("/orders/");
        setOrders(response.data || []);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Failed to load orders. Please try again later.");
        toast.error("Failed to load orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return 'NA';
    const options = { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'pending':
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  const handleClick = (order) => {
    navigate(`/order/${order._id}`, { state: { order } });
  }; 
  
  const handleCancelOrder = async (orderId, e) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to cancel this order?')) {
      try {
        await API.put(`/orders/cancel/${orderId}`);
        setOrders(orders.map(order => 
          order._id === orderId ? { ...order, status: 'Cancelled' } : order
        ));
        toast.success('Order cancelled successfully');
      } catch (error) {
        console.error('Error cancelling order:', error);
        toast.error('Failed to cancel order');
      }
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-24" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-16 w-16 rounded-md" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-9 w-24" />
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full text-center py-8 space-y-4">
        <p className="text-destructive">{error}</p>
        <Button 
          onClick={() => window.location.reload()}
          variant="outline"
        >
          Retry
        </Button>
      </div>
    );
  }

  const getStatusVariant = (status) => {
    switch (status?.toLowerCase()) {
      case 'delivered':
        return 'success';
      case 'cancelled':
        return 'destructive';
      case 'processing':
        return 'info';
      case 'shipped':
        return 'info';
      default:
        return 'secondary';
    }
  };

  const getPaymentStatusVariant = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return 'success';
      case 'failed':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">My Orders</h1>
          <Button onClick={() => navigate('/medicines')}>
            Browse Medicines
          </Button>
        </div>
        
        {orders.length === 0 ? (
          <Card className="text-center p-12">
            <h3 className="text-lg font-medium">No orders yet</h3>
            <p className="text-muted-foreground mt-2">You haven't placed any orders yet.</p>
            <Button className="mt-4" onClick={() => navigate('/medicines')}>
              Start Shopping
            </Button>
          </Card>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <Card 
                key={order._id} 
                className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleClick(order)}
              >
                <CardHeader className="pb-3 border-b">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <div>
                      <p className="text-sm text-muted-foreground">Order #{order.orderId || order._id.slice(-8).toUpperCase()}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant={getStatusVariant(order.status)}>
                          {order.status?.charAt(0).toUpperCase() + order.status?.slice(1).replace(/-/g, ' ')}
                        </Badge>
                        {order.paymentStatus && (
                          <Badge variant={getPaymentStatusVariant(order.paymentStatus)}>
                            {order.paymentStatus}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {formatDate(order.createdAt || new Date())}
                    </p>
                  </div>
                </CardHeader>
              
                <CardContent className="p-0">
                  <div className="divide-y">
                    {order.items?.map((item, index) => {
                      const getImageUrl = () => {
                        if (!item.medicineId) return null;
                        
                        const possiblePaths = [
                          item.medicineId.image?.url,
                          item.medicineId.image,
                          item.medicineId.images?.[0]?.url,
                          item.medicineId.images?.[0],
                          item.imageUrl,
                          item.image
                        ];
                        
                        return possiblePaths.find(url => 
                          url && (typeof url === 'string') && (url.startsWith('http') || url.startsWith('/'))
                        );
                      };
          
                      const imageUrl = getImageUrl();
                      const productName = item.medicineId?.productName || 'Medicine';
                      const brand = item.medicineId?.brand;
          
                      return (
                        <div 
                          key={`${order._id}-${index}`} 
                          className="flex items-start p-4 hover:bg-muted/50 transition-colors"
                        >
                          <Avatar className="h-16 w-16 rounded-md border">
                            <AvatarImage 
                              src={imageUrl} 
                              alt={productName}
                              className="object-cover"
                            />
                            <AvatarFallback className="rounded-md">
                              {productName.charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          
                          <div className="ml-4 flex-1 min-w-0">
                            <h3 className="font-medium leading-tight line-clamp-2">
                              {productName}
                            </h3>
                            {brand && (
                              <p className="text-sm text-muted-foreground mt-0.5">{brand}</p>
                            )}
                            <div className="mt-1.5 flex items-center text-sm text-muted-foreground">
                              <span>Qty: {item.quantity}</span>
                              <span className="mx-2">•</span>
                              <span>₹{Number(item.price || 0).toFixed(2)} each</span>
                            </div>
                          </div>
                          
                          <div className="ml-4 text-right">
                            <p className="font-medium">
                              ₹{Number((item.quantity * (item.price || 0)).toFixed(2))}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              
                <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">
                      {order.items?.length} {order.items?.length === 1 ? 'item' : 'items'} • {order.paymentMethod || 'N/A'}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:items-end gap-2 w-full sm:w-auto">
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Total Amount</p>
                      <p className="text-lg font-bold">
                        ₹{Number(order.totalAmount || 0).toFixed(2)}
                      </p>
                    </div>
                    
                    {order.status === 'pending' && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full sm:w-auto border-destructive/20 text-destructive hover:bg-destructive/10 hover:text-destructive"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCancelOrder(order._id, e);
                        }}
                      >
                        Cancel Order
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
