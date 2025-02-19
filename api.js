const path = require('path')
const Products = require('./products')
const Orders = require('./orders')
const autoCatch = require('./lib/auto-catch')


/**
 * Handle the root route
 * @param {object} req
@@ -50,8 +52,8 @@ async function getProduct(req, res, next) {
 * @param {object} res 
 */
async function createProduct(req, res) {
  console.log('request body:', req.body)
  res.json(req.body)
  const product = await Products.create(req.body)
  res.json(product) 
}

/**
@@ -74,12 +76,56 @@ async function editProduct(req, res, next) {
async function deleteProduct(req, res, next) {
  res.json({ success: true })
}
async function editProduct (req, res, next) {
  const change = req.body
  const product = await Products.edit(req.params.id, change)
  res.json(product)
}
async function deleteProduct (req, res, next) {
  const response = await Products.destroy(req.params.id)
  res.json(response)
}
async function createOrder (req, res, next) {
  const order = await Orders.create(req.body)
  res.json(orders)
}
async function listOrders (req, res, next) {
  const { offset = 0, limit = 25, productId, status } = req.query

  const orders = await Orders.list({ 
    offset: Number(offset), 
    limit: Number(limit),
    productId, 
    status 
  })

  res.json(orders)
}
async function editOrder(req, res, next) {
  const { orderId } = req.params

  const order = await Orders.findByIdAndUpdate(orderId, req.body, { new: true })

  res.json(order)
}

async function destroyOrder(req, res, next) {
  const { orderId } = req.params

  const order = await Orders.findByIdAndDelete(orderId)

  res.json(order)
}

module.exports = autoCatch({
  handleRoot,
  listProducts,
  getProduct,
  createProduct,
  editProduct,
  deleteProduct
  deleteProduct,
  createOrder,
  listOrders,
  editOrder,
  destroyOrder
})