export default function Features() {
    return (
        <main className="flex flex-1 w-full max-w-4xl flex-col items-start justify-start py-32 px-16 bg-white dark:bg-black mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">Features</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">Feature 1</h2>
                    <p className="text-gray-600 dark:text-gray-400">Description of your first feature</p>
                </div>
                <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">Feature 2</h2>
                    <p className="text-gray-600 dark:text-gray-400">Description of your second feature</p>
                </div>
            </div>
        </main>
    );
}
