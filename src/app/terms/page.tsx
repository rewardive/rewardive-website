import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TermsOfServicePage() {
    const lastUpdated = "May 30, 2026";

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="container mx-auto max-w-4xl px-4 pt-32 pb-24">
                <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Terms of Service
                </h1>

                <div className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-muted-foreground">
                    <section>
                        <p className="text-lg font-medium text-foreground">
                            Last Updated: {lastUpdated}
                        </p>
                        <p className="mt-4">
                            By using Rewardive, you agree to these Terms of Service. Please read them carefully.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">1. Description of Service</h2>
                        <p>
                            Rewardive is a utility application designed to help users identify credit card offers and rewards. The service includes offer tracking, coupon collection, and UPI QR code scanning to recommend the best card for specific transactions.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">2. Data and Privacy</h2>
                        <p>
                            Rewardive is designed to provide recommendations while respecting your privacy.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Local Processing:</strong> QR code analysis and core recommendation logic are executed locally on your device.</li>
                            <li><strong>Card Selections:</strong> Information about your credit card selections is transmitted to our servers to provide and improve our recommendation services.</li>
                            <li><strong>Anonymity:</strong> We do not require account creation for core features, and we aim to minimize the collection of personally identifiable information.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">3. No Financial Advice</h2>
                        <p>
                            The information and recommendations provided by Rewardive are for informational purposes only.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Not Financial Advice:</strong> Rewardive does not provide financial, investment, or legal advice.</li>
                            <li><strong>Accuracy of Offers:</strong> While we strive to provide up-to-date information, credit card offers, terms, and reward rates change frequently. We do not guarantee the accuracy, completeness, or validity of any third-party offers displayed.</li>
                            <li><strong>User Responsibility:</strong> You are responsible for verifying the specific terms of any offer or transaction with your bank or the merchant before proceeding.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">4. Use of the App</h2>
                        <p>
                            You agree to use Rewardive only for lawful purposes. You may not:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Attempt to decompile or reverse engineer the application.</li>
                            <li>Use any automated system to scrape data from the website or application.</li>
                            <li>Interfere with the security-related features of the service.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">5. Disclaimer of Warranties</h2>
                        <p>
                            REWARDIVE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">6. Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted by law, Rewardive shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data or other intangible losses.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">7. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these terms at any time. We will notify users of any changes by updating the &quot;Last Updated&quot; date at the top of this page. Your continued use of Rewardive after such changes constitutes your acceptance of the new terms.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">8. Contact Us</h2>
                        <p>
                            If you have any questions about these Terms, please contact us at:
                        </p>
                        <div className="bg-secondary/30 rounded-lg p-6 border border-border/50">
                            <p className="font-semibold text-foreground">Legal Team</p>
                            <p>Email: legal@rewardive.app</p>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
