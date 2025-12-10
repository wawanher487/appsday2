import Link from "next/link";

const RegiterPage = () => {
    return (
        <div>
            <h1>Regiter</h1>
            <p>
                Sudah punya akun ? Login <Link href={"/auth/login"}>disini</Link>
            </p>
        </div>
    )
};

export default RegiterPage;