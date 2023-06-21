import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div class="flex items-center justify-center h-screen">
            <div class="flex-col space-y-4 text-center">
                <div class="text-purple-600 text-xl font-medium">CodeVerse</div>
                <div>
                    <h1 className='text-6xl'>404</h1>
                </div>
                <div class="text-5xl font-medium">Page not found</div>
                <div class="text-gray-500">Sorry, the page you&apos;re looking for isn&apos;t available.</div>
                <div class="flex items-center justify-center">
                    <Link href={"/"}><div class="bg-purple-600 px-4 py-1 text-white font-medium rounded-lg  hover:scale-105 cursor-pointer">Visit Homepage</div></Link>

                </div>
            </div>
        </div>

    );
};

export default NotFoundPage;
