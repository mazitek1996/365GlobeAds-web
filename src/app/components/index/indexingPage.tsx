// import HomeIndex from "./home/homeIndex"
// import Footer from "../layout/footer"
// import {Header} from "../layout/header"

// export default function Index() {


//     return (

//         <main>





// <HomeIndex/>





//         </main>
//     )
// }



// pages/index.tsx

import React from "react";
import Layout from "@/app/components/layout/Layout";
import HomeIndex from "./home/homeIndex"
export default function Index() {
    return (
         <Layout>
            <main>
                <HomeIndex />
            </main>
         </Layout>
    );
}
