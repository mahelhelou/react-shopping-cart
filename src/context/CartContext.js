import { createContext } from 'react'
import { faker } from '@faker-js/faker'

const cartContext = createContext()

const CartContext = props => {
	// Generate 20 product items using Faker package
	const products = [...Array(20)].map(() => ({
		id: faker.datatype.uuid(),
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.image(),
		inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
		fastDelivery: faker.datatype.boolean(),
		ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5])
	}))

	console.log(products)

	return <cartContext.Provider>{props.children}</cartContext.Provider>
}

export default CartContext
