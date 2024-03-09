import { Title } from "@/components";
import Link from "next/link";
import { initialData } from '../../../seed/seed';
import Image from "next/image";


const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]

export default function () {
    return (
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

            <div className="flex flex-col w-[1000px]">
                <Title title="Verificar orden" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

                    {/* Cart */}
                    <div className="flex flex-col mt-5">
                        <span className="text-xl">Ajustar elementos</span>
                        <Link href="/cart" className="underline mb-5 hover:text-blue-600 transition-colors">Editar carrito</Link>


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
                                        <span>${product.price} x 3</span>
                                        <span className="font-bold">Subtotal: ${product.price * 3}</span>
                                    </div>
                                </div>

                            ))
                        }
                    </div>

                    {/* Checkout - Order Resume */}

                    <div className="bg-white rounded-xl shadow-xl p-7">

                        <h2 className="text-2xl mb-2">Dirección de entrega</h2>
                        <div className="mb-10 flex flex-col gap-1">
                            <span className="text-xl">Joel Alvarez</span>
                            <span>Calle P. Sherman</span>
                            <span>Col. Centro</span>
                            <span>Alcaldía Sacaba</span>
                            <span>Ciudad de Cochabamba</span>
                            <span>CP 0000</span>
                            <span>123.123.123</span>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

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

                        <div className="mt-5 mb-2 w-full">
                            {/* Disclaimer */}
                            <p className="mb-5">
                                <span className="text-xs">Al hacer clic en "Colocar orden", aceptas nuestros <Link href="#" className="underline">términos y condiciones</Link> y <Link href="#" className="underline">política de privacidad</Link>.</span>
                            </p>

                            <Link
                                href="/orders/123"
                                className="flex justify-center w-full btn-primary mt-5 mb-2 "
                            >
                                Colocar orden
                            </Link>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}