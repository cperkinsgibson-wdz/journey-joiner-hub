import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEOHead from "@/components/seo/SEOHead";

const Privacy = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy - ExploreEarnRepeat"
        description="Privacy policy and data protection information for ExploreEarnRepeat travel business opportunity platform."
        noindex={true}
      />

      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-3xl text-center">Privacy Policy</CardTitle>
                <p className="text-center text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none space-y-8">
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                  <p className="mb-4">
                    We collect information you provide directly to us, such as when you create an account, 
                    fill out a form, make a purchase, or contact us. This may include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Name, email address, and phone number</li>
                    <li>Demographic information and preferences</li>
                    <li>Payment and billing information</li>
                    <li>Communications with us</li>
                    <li>Any other information you choose to provide</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                  <p className="mb-4">We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send you technical notices, updates, and support messages</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Communicate about products, services, and opportunities</li>
                    <li>Monitor and analyze trends and usage</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
                  <p className="mb-4">
                    We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>With PlanNet Marketing as part of our business relationship</li>
                    <li>With service providers who assist us in operating our business</li>
                    <li>To comply with legal obligations or protect our rights</li>
                    <li>With your consent or at your direction</li>
                  </ul>
                  <p className="mt-4">
                    <strong>We do not sell your personal information to third parties.</strong>
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                  <p>
                    We take reasonable measures to protect your information from loss, theft, 
                    misuse, and unauthorized access. However, no internet transmission is 100% secure, 
                    and we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
                  <p className="mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access and update your personal information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt out of marketing communications</li>
                    <li>Request information about how we process your data</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">6. Cookies and Tracking</h2>
                  <p>
                    We use cookies and similar technologies to improve your experience, 
                    analyze usage, and assist with marketing efforts. You can control 
                    cookies through your browser settings.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
                  <p>
                    If you have questions about this Privacy Policy, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p><strong>ExploreEarnRepeat</strong></p>
                    <p>Email: info@exploreearnrepeat.com</p>
                    <p>Phone: +1-xxx-xxx-xxxx</p>
                    <p>Address: Baltimore, MD</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you 
                    of any changes by posting the new policy on this page and updating the 
                    "Last updated" date.
                  </p>
                </section>

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;