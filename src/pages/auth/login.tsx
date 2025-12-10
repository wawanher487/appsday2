import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
    {/* imperatif routing  */}
    const {push} = useRouter();
    const handleLogin = () => {
        localStorage.setItem("isLogin", "true");

        // imperatif routing
        push("/product");
        
    }
    return (
        <div>
            <h1>Login</h1>
            {/* imperatif routing  */}
            {/* terjadi sudah klik tombol login */}
            <button onClick={() => handleLogin()}>Login</button>
            <p>
                Belum punya akun ? Registrasi <Link href={"/auth/register"}>disini</Link>
            </p>
            <p>
                pindah ke about<Link href={"/about"}> disini</Link>
            </p>
        </div>
    )
};

export default LoginPage;