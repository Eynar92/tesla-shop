import { QuantitySelector, Title } from "@/components";
import Link from "next/link";
import { initialData } from '../../../seed/seed';
import Image from "next/image";
import { redirect } from "next/navigation";


const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]

export default function () {

    // redirect('/empty');

    return (
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

            <div className="flex flex-col w-[1000px]">
                <Title title="Carrito" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

                    {/* Cart */}
                    <div className="flex flex-col mt-5">
                        <span className="text-xl">Agregar más items</span>
                        <Link href="/" className="underline mb-5 hover:text-blue-600 transition-colors">Continúa comprando</Link>


                        {/* Items */}
                        {
                            productsInCart.map(product => (
                                <div key={product.slug} className="flex mb-5">
                                    <Image
                                        src={`/products/${product.images[0]}`}
                                        alt={product.title}
                                        width={100}
                                        height={100}
                                        className="mr-5 rounded object-cover"
                                    />

                                    <div className="flex flex-col items-start gap-1">
                                        <span>{product.title}</span>
                                        <span>${product.price}</span>
                                        <QuantitySelector quantity={3} />
                                        <button className="underline mt-3">Remover</button>
                                    </div>
                                </div>

                            ))
                        }
                    </div>

                    {/* Checkout - Order Resume */}

                    <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
                        <h2 className="text-2xl mb-2">Resumen de orden</h2>

                        <div className="grid grid-cols-2">
                            <span>No. productos</span>
                            <span className="text-right">3 artículos</span>

                            <span>Subtotal</span>
                            <span className="text-right">$ 100</span>

                            <span>Impuestos (15%)</span>
                            <span className="text-right">$ 100</span>

                            <span className="mt-5 text-2xl">Total:</span>
                            <span className="mt-5 text-2xl text-right">$ 100</span>
                        </div>

                        <div>
                            <Link href="/checkout/address" className="flex justify-center w-full btn-primary mt-5 mb-2 ">Checkout</Link>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}