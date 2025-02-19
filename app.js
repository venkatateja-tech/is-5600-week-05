
app.delete('/products/:id', api.deleteProduct)
app.post('/products', api.createProduct)
// Boot the server
app.get('/orders', api.listOrders)
app.get('/orders/', api.createOrder)
app.listen(port, () => console.log(`Server listening on port ${port}`))