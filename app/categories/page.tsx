export default function Categories() {
    return (
        <main className="flex flex-1 w-full max-w-4xl flex-col items-start justify-start py-32 px-16 bg-white dark:bg-black mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">Categories</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                {["Category 1", "Category 2", "Category 3"].map((category) => (
                    <div
                        key={category}
                        className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-shadow"
                    >
                        <h2 className="text-lg font-semibold text-black dark:text-white">{category}</h2>
                    </div>
                ))}
            </div>
        </main>
    );
}
