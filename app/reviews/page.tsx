export default function Reviews() {
    return (
        <main className="flex flex-1 w-full max-w-4xl flex-col items-start justify-start py-32 px-16 bg-white dark:bg-black mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">Reviews</h1>
            <div className="space-y-4 w-full">
                {[1, 2, 3].map((review) => (
                    <div
                        key={review}
                        className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg"
                    >
                        <div className="flex items-center mb-2">
                            <span className="text-yellow-400">★★★★★</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">Review {review} content goes here</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
