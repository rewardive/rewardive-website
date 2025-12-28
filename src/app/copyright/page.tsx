import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function CopyrightPage() {
  const lastUpdated = "December 28, 2024";

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto max-w-4xl px-4 pt-32 pb-24">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Copyright Information
        </h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-muted-foreground">
          <section>
            <p className="text-lg">
              Effective Date: {lastUpdated}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Ownership of Content</h2>
            <p>
              The Rewardive website, mobile application, and all content included therein, such as text, graphics, logos, images, audio clips, video clips, digital downloads, data compilations, and software (collectively, the "Content"), are the property of Rewardive or its content suppliers and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p>
              The compilation of all Content on Rewardive is the exclusive property of Rewardive and is protected by copyright laws. All software used on Rewardive is the property of Rewardive or its software suppliers and is protected by copyright laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. Trademarks</h2>
            <p>
              The name "Rewardive," the Rewardive logo, and any other Rewardive product or service names, logos, or slogans that may appear on the website or application are trademarks of Rewardive and may not be copied, imitated, or used, in whole or in part, without the prior written permission of Rewardive.
            </p>
            <p>
              All other trademarks, registered trademarks, product names, and company names or logos mentioned on Rewardive are the property of their respective owners. Reference to any products, services, processes, or other information, by name, trademark, manufacturer, supplier, or otherwise, does not constitute or imply endorsement, sponsorship, or recommendation by Rewardive.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. Permitted Use</h2>
            <p>
              Rewardive grants you a limited, non-exclusive, non-transferable, and revocable license to access and use the Content for your personal, non-commercial purposes only, in accordance with our <a href="/terms" className="text-primary hover:underline">Terms of Service</a>. This license does not include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Any resale or commercial use of the Content;</li>
              <li>The collection and use of any product listings, descriptions, or prices;</li>
              <li>Any derivative use of the Content;</li>
              <li>Any downloading or copying of account information for the benefit of another merchant;</li>
              <li>Any use of data mining, robots, or similar data gathering and extraction tools.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Prohibited Use</h2>
            <p>
              You may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reproduce, duplicate, copy, sell, resell, visit, or otherwise exploit Rewardive or any portion of Rewardive for any commercial purpose without express written consent of Rewardive;</li>
              <li>Frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information of Rewardive without express written consent;</li>
              <li>Use any meta tags or any other "hidden text" utilizing Rewardive's name or trademarks without the express written consent of Rewardive.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. Copyright Infringement Claims</h2>
            <p>
              Rewardive respects the intellectual property of others. If you believe that your work has been copied in a way that constitutes copyright infringement, please contact us at:
            </p>
            <div className="bg-secondary/30 rounded-lg p-6 border border-border/50">
              <p className="font-semibold text-foreground">Legal Department</p>
              <p>Email: legal@rewardive.app</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. Modifications</h2>
            <p>
              Rewardive reserves the right to modify this Copyright Information at any time. Any changes will be effective immediately upon posting to the website or application. Your continued use of Rewardive following the posting of changes will constitute your acceptance of such changes.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
