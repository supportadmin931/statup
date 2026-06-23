function sendWhatsApp(productName, price) {
    // Yahan apna asli WhatsApp number dalein (91 ke saath)
    let phoneNumber = "9173847744"; 
    
    // Customer ki taraf se bheja jane wala message
    let message = `Hello Kiddle Store! Mujhe "${productName}" khareedna hai. Iska price ₹${price} dikh raha hai. Kya ye stock mein hai?`;
    
    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}