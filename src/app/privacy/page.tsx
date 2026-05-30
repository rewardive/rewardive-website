import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PrivacyPolicyPage() {
    const lastUpdated = "May 30, 2026";

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
                            Rewardive is built with privacy as a core principle. We minimize data collection and prioritize local processing.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">1. Data Collection</h2>
                        <p>
                            We do not require you to create an account to use the core features of Rewardive. We do not collect personal information such as your name, email address, phone number, or specific financial transaction details.
                        </p>
                        <p>
                            <strong>Card Selections:</strong> When you select or add credit cards within the app, this selection data is transmitted to our servers. We use this information to provide you with the most relevant offers and to improve our recommendation engine.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">2. Local Processing</h2>
                        <p>
                            Rewardive leverages your device&apos;s capabilities to keep your data secure:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Offline Analysis:</strong> All QR code scanning and parsing happens locally on your device. The information extracted from QR codes never leaves your device.</li>
                            <li><strong>Local Matching:</strong> The initial logic to match offers with your cards is executed within the app.</li>
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
                            By using Rewardive, you agree to this privacy policy. We are committed to transparency regarding any data we collect and will continue to prioritize your privacy as we add new features.
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
