export default function HowItWorks() {
    return (
        <main className="flex flex-1 w-full max-w-4xl flex-col items-start justify-start py-32 px-16 bg-white dark:bg-black mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">How It Works</h1>
            <div className="space-y-6 w-full">
                <div className="p-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950">
                    <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">Step 1</h2>
                    <p className="text-gray-600 dark:text-gray-400">First step description</p>
                </div>
                <div className="p-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950">
                    <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">Step 2</h2>
                    <p className="text-gray-600 dark:text-gray-400">Second step description</p>
                </div>
            </div>
        </main>
    );
}
