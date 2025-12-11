import Link from "next/link";
import styles from './Login.module.scss';
import { useRouter } from "next/router";

const LoginViews = () => {
    {/* imperatif routing  */}
    const {push} = useRouter();
    const handleLogin = () => {
        localStorage.setItem("isLogin", "true");

        // imperatif routing
        push("/product");
        
    }
    return (
        <div className={styles.login}>
            {/* contoh penggunaan tailwindcss */}
            <h1 className="text-2xl font-bold">Login</h1>
            {/* imperatif routing  */}
            {/* terjadi sudah klik tombol login */}
            <button onClick={() => handleLogin()}>Login</button>
            {/* memberika styling dalam htmlnya langsung */}
            <p style={{color: "blue", borderTop: "1px solid black", borderRadius: "5px"}}>
                Belum punya akun ? Registrasi <Link href={"/auth/register"}>disini</Link>
            </p>
            <p style={{paddingTop: "5px"}} className="font-bold">
                pindah ke about<Link href={"/about"}> disini</Link>
            </p>
        </div>
    )
}

export default LoginViews;