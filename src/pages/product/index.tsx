import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const ProductPage = () => {
    const [isLogin, setIslogin] = useState(false);
    const {push} = useRouter();

    useEffect(() => {
        const loginStatus = localStorage.getItem("isLogin");

        if (loginStatus === "true") {
            setIslogin(true);
        } else {
            push("/auth/login");
        }
        
    },[])

    return (
        <div>
            <h1>Product Page</h1>
        </div>
    )
}

export default ProductPage;