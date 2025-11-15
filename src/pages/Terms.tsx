import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="bg-gradient-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Terms & Services
            </h1>
            <p className="text-center text-lg text-primary-foreground/90 max-w-3xl mx-auto">
              Please read these terms carefully before using our services
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="space-y-8 text-muted-foreground">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. General Terms</h2>
                  <p>
                    By accessing and placing an order with Percitech Sales Corporation, you confirm that you are in 
                    agreement with and bound by the terms and conditions contained in these Terms of Service. These 
                    terms apply to the entire website and any email or other type of communication between you and 
                    Percitech Sales Corporation.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Products and Services</h2>
                  <p>
                    All products and services offered by Percitech Sales Corporation are genuine and sourced directly 
                    from authorized manufacturers. We are authorized distributors for Apidor, Tyrolit, Perfect Super 
                    Abrasive Tools, SMC, and Janatics. All products come with manufacturer warranties where applicable.
                  </p>
                  <p className="mt-3">
                    Product specifications, availability, and pricing are subject to change without notice. We reserve 
                    the right to limit quantities or discontinue products at any time.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Pricing and Payment</h2>
                  <p>
                    All prices listed on our website are in Indian Rupees (INR) unless otherwise stated. Prices are 
                    subject to change without notice. We accept various payment methods including bank transfer, 
                    cheque, and digital payment options for verified business accounts.
                  </p>
                  <p className="mt-3">
                    Full payment is required before shipment unless credit terms have been pre-approved. Additional 
                    taxes and duties may apply based on your location and order value.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Delivery and Shipping</h2>
                  <p>
                    We strive to provide 48-hour delivery support for in-stock items. Delivery times may vary based 
                    on product availability, location, and order volume. Shipping costs will be calculated based on 
                    order weight, dimensions, and destination.
                  </p>
                  <p className="mt-3">
                    Risk of loss and title for products pass to you upon delivery to the carrier. We are not 
                    responsible for delays caused by shipping carriers or circumstances beyond our control.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Returns and Warranty</h2>
                  <p>
                    Products can be returned within 15 days of receipt if they are defective or damaged during 
                    shipping. Returns must be in original packaging with all accessories and documentation. Custom 
                    orders and special-sized products are non-returnable unless defective.
                  </p>
                  <p className="mt-3">
                    Manufacturer warranties apply to all eligible products. Warranty claims must be processed through 
                    us with proof of purchase. We will facilitate all warranty claims with manufacturers on your behalf.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
                  <p>
                    Percitech Sales Corporation shall not be liable for any direct, indirect, incidental, special, or 
                    consequential damages resulting from the use or inability to use our products or services. Our 
                    maximum liability shall not exceed the purchase price of the product in question.
                  </p>
                  <p className="mt-3">
                    We are not responsible for application-specific results or compatibility with your particular 
                    equipment or processes. Technical specifications should be verified before purchase.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Intellectual Property</h2>
                  <p>
                    All content on this website, including text, graphics, logos, and images, is the property of 
                    Percitech Sales Corporation or our content suppliers and is protected by intellectual property laws. 
                    Unauthorized use is prohibited.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Privacy Policy</h2>
                  <p>
                    We respect your privacy and are committed to protecting your personal information. Customer data 
                    is used solely for order processing, delivery, and communication purposes. We do not sell or share 
                    customer information with third parties except as required for order fulfillment.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Information</h2>
                  <p>
                    For questions regarding these terms and conditions, please contact us at:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Email: info@percitechsales.com</li>
                    <li>Phone: +91 (XXX) XXX-XXXX</li>
                    <li>Address: Industrial Area, Business District</li>
                  </ul>
                </div>

                <div className="border-t border-border pt-6 mt-8">
                  <p className="text-sm">
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
                  </p>
                  <p className="text-sm mt-2">
                    These terms and conditions are subject to change without notice. Please review them periodically 
                    for updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
