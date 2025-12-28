import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PrivacyPolicyPage() {
    const lastUpdated = "December 28, 2024";

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="container mx-auto max-w-4xl px-4 pt-32 pb-24">
                <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Privacy Policy
                </h1>

                <div className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-muted-foreground">
                    <section>
                        <p className="text-lg font-medium text-foreground">
                            Last Updated: {lastUpdated}
                        </p>
                        <p className="mt-4 text-xl text-primary font-semibold">
                            Rewardive is built with privacy as a core principle. We do not collect, store, or share any of your personal data.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">1. No Data Collection</h2>
                        <p>
                            We do not require you to create an account to use the core features of Rewardive. We do not collect personal information such as your name, email address, phone number, or any financial details.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">2. Local Processing</h2>
                        <p>
                            When you use Rewardive to scan UPI QR codes or check credit card offers:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Offline Analysis:</strong> All QR code scanning and parsing happens locally on your device. The information extracted from the QR code never leaves your device.</li>
                            <li><strong>Local Matching:</strong> The logic to determine which of your saved cards offers the best rewards is executed entirely within the app.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">3. No Third-Party Tracking</h2>
                        <p>
                            We do not use third-party analytics (like Google Analytics) or advertising trackers within the mobile application to monitor your behavior or build a profile of your usage.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">4. Website Analytics</h2>
                        <p>
                            Our website uses basic, privacy-respecting analytics to help us understand site traffic and improve our user experience. This data is aggregated and does not identify individual users.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">5. Your Consent</h2>
                        <p>
                            By using Rewardive, you agree to this privacy policy. Since we do not collect any data, there is no data for you to manage or delete from our servers.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">6. Contact Us</h2>
                        <p>
                            If you have any questions about our privacy practices, please feel free to reach out to us:
                        </p>
                        <div className="bg-secondary/30 rounded-lg p-6 border border-border/50">
                            <p className="font-semibold text-foreground">Privacy Team</p>
                            <p>Email: legal@rewardive.app</p>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
