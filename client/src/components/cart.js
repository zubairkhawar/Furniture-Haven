import React from "react";

const Cart = () => {
    return(
        <div class="bg-stone-100 h-screen pt-[5%] " >
    <div class="container mx-auto px-4 pt-20">
        <h1 class="text-lg font-normal mb-4 md:text-2xl md:font-semibold">Shopping Cart</h1>
        <div class="flex flex-col md:flex-row gap-4">
            <div class="md:w-3/4">
                <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                    <table class="w-full">
                        <thead>
                            <tr>
                                <th class="text-left font-semibold">Product</th>
                                <th class="text-left font-semibold">Price</th>
                                <th class="text-left font-semibold hidden md:flex">Quantity</th>
                                <th class="text-left font-semibold hidden md:flex">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-4">
                                    <div class="flex items-center">
                                        <img class="h-16 w-16 mr-4" src="F.jpg" alt="Product image" />
                                        <span class="font-semibold">Olive Green Sofa Chair</span>
                                    </div>
                                </td>
                                <td class="py-4 hidden md:flex">Rs 48000</td>
                                <td class="py-4 hidden md:flex">
                                    <div class="flex items-center">
                                        <button class="border rounded-md py-2 px-4 mr-2">-</button>
                                        <span class="text-center w-8">1</span>
                                        <button class="border rounded-md py-2 px-4 ml-2">+</button>
                                    </div>
                                </td>
                                <td class="py-4">Rs 48000</td>
                            </tr>
                            <tr>
                                <td class="py-4">
                                    <div class="flex items-center">
                                        <img class="h-16 w-16 mr-4" src="pink.jpeg" alt="Product image" />
                                        <span class="font-semibold">Pink Sofa Chair</span>
                                    </div>
                                </td>
                                <td class="py-4 hidden md:flex">Rs 45000</td>
                                <td class="py-4 hidden md:flex">
                                    <div class="flex items-center">
                                        <button class="border rounded-md py-2 px-4 mr-2">-</button>
                                        <span class="text-center w-8">1</span>
                                        <button class="border rounded-md py-2 px-4 ml-2">+</button>
                                    </div>
                                </td>
                                <td class="py-4">Rs 45000</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="md:w-1/4">
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-lg font-semibold mb-4">Summary</h2>
                    <div class="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>Rs 93000.00</span>
                    </div>
                    <div class="flex justify-between mb-2">
                        <span>Taxes</span>
                        <span>Rs 0.00</span>
                    </div>
                    <div class="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>Rs 3000.00</span>
                    </div>
                    <hr class="my-2" />
                    <div class="flex justify-between mb-2">
                        <span class="font-semibold">Total</span>
                        <span class="font-semibold">Rs 96000.00</span>
                    </div>
                    <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}
export default Cart