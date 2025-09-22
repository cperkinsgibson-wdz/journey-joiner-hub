import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEOHead from "@/components/seo/SEOHead";

const Terms = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service - ExploreEarnRepeat"
        description="Terms of service and user agreement for ExploreEarnRepeat travel business opportunity platform."
        noindex={true}
      />

      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-3xl text-center">Terms of Service</CardTitle>
                <p className="text-center text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none space-y-8">
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using ExploreEarnRepeat.com, you accept and agree to be bound 
                    by the terms and provision of this agreement. If you do not agree with any part 
                    of these terms, you should not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">2. Business Opportunity Disclosure</h2>
                  <p className="mb-4">
                    ExploreEarnRepeat operates as part of the Platinum Network Team within PlanNet Marketing. 
                    This is a legitimate business opportunity that requires:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Active participation and effort to achieve results</li>
                    <li>Ongoing training and skill development</li>
                    <li>Compliance with all company policies and legal requirements</li>
                    <li>Professional conduct in all business activities</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">3. Income Disclaimer</h2>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                    <p className="font-semibold text-yellow-800">IMPORTANT INCOME DISCLAIMER:</p>
                  </div>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Results vary significantly based on individual effort, market conditions, and other factors</li>
                    <li>Past performance and testimonials do not guarantee future results</li>
                    <li>This is a business opportunity requiring work, dedication, and ongoing effort</li>
                    <li>Most participants should expect modest results, if any</li>
                    <li>Only a small percentage of participants achieve substantial income</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
                  <p className="mb-4">By using our services, you agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the confidentiality of your account</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Not engage in fraudulent or deceptive practices</li>
                    <li>Respect intellectual property rights</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">5. Prohibited Uses</h2>
                  <p className="mb-4">You may not use our services to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Violate any laws or regulations</li>
                    <li>Transmit harmful or malicious content</li>
                    <li>Impersonate others or provide false information</li>
                    <li>Interfere with the operation of our services</li>
                    <li>Collect user information without consent</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
                  <p>
                    All content on this website, including text, graphics, logos, and software, 
                    is owned by ExploreEarnRepeat or its licensors and is protected by copyright 
                    and other intellectual property laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
                  <p>
                    ExploreEarnRepeat and its affiliates shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages resulting from your 
                    use of our services, even if we have been advised of the possibility of such damages.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
                  <p>
                    We may terminate or suspend your access to our services immediately, without 
                    prior notice, for any reason, including breach of these Terms of Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">9. Compliance and Legal</h2>
                  <p className="mb-4">
                    This business opportunity operates in compliance with:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Federal Trade Commission (FTC) Business Opportunity Rule</li>
                    <li>State-specific business opportunity laws</li>
                    <li>Anti-pyramid scheme regulations</li>
                    <li>Travel industry regulations and licensing requirements</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
                  <p>
                    For questions about these Terms of Service, please contact us:
                  </p>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p><strong>ExploreEarnRepeat</strong></p>
                    <p>Email: info@exploreearnrepeat.com</p>
                    <p>Phone: +1-xxx-xxx-xxxx</p>
                    <p>Address: Baltimore, MD</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
                  <p>
                    We reserve the right to modify these terms at any time. Changes will be 
                    effective immediately upon posting. Your continued use of our services 
                    constitutes acceptance of the modified terms.
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

export default Terms;