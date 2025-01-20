
export default function Home() {
    return (
        <div className="flex justify-center px-4 py-[1rem]">
            <main className="max-w-[800px] flex text-center mb-[2rem] flex-col gap-8 row-start-2 items-center ">
                <nav className="w-full flex justify-center">
                    <img alt="logo" style={{maxWidth: '200px'}} src='logo_eswatini_assembly.png' />
                </nav>
                <h1 className="font-bold  text-5xl">The Eswatini Assembly</h1>
                <p className="md:text-lg">Our main and sole purpose is to repatriate living men and women back to the land and soil jurisdiction, by teaching them how to correct their political status.</p>
                <a href="https://wa.me/26876780787" target="_blank" className="bg-blue-500 p-4 rounded-md text-slate-100 font-bold px-[50px]">Contact Us</a>
            </main>
        </div>
    );
}
