import Link from "next/link";
import styles from './Register.module.css';

const RegisterViews = () => {
    return (
        <div className={styles.register}>
            <h1>Register</h1>
            <p>
                Sudah punya akun ? Login <Link href={"/auth/login"}>disini</Link>
            </p>
        </div>
    )
}

export default RegisterViews;