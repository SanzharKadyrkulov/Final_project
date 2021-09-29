const express = require("express");
const ProductController = require("./../controllers/productController");
const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Product:
 *      type: object
 *      required:
 *        - id
 *      properties:
 *        id:
 *          type: integer
 *          description: The auto-generated id of a product
 *        title:
 *          type: string
 *          description: name of the product
 *        type:
 *          type: string
 *          description: product type
 *        describtion:
 *          type: string
 *          description: product description
 *        image:
 *          type: string
 *          description: link to product image
 *        price:
 *          type: integer
 *          description: product price
 *      example:
 *        id: 1
 *        title: 3x3
 *        type: Puzzle
 *        describtion: It could have been just another peaceful night in a remote village, near the outskirts of the Dark Forest, but they were interrupted by the vicious howling of the wolves from afar. In a small cabin, a little girl was kneeling beside her bed, praying.
 *        image: https://puzzles.in.ua/image/catalog/goods/KubikRubika/QiYi_MoFangGe/QiDi/QIDI-color.jpg
 *        price: 240
 */

/**
 * @swagger
 * /Products:
 *    get:
 *      summary: returns all products
 *      tags: [Product]
 *      responses:
 *        200:
 *          description: the list of the products
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                 $ref: '#/components/schemas/Product'
 */

router.get("/", ProductController.getAll);

/**
 * @swagger
 * /Products/{id}:
 *    get:
 *      summary: gets products by id
 *      tags: [Product]
 *      parameters:
 *        - in : path
 *          name: id
 *          description: id of product
 *          schema:
 *            type: integer
 *          required: true
 *      responses:
 *        200:
 *          description: product by its id
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: integer
 *                    description: The product id
 *                    example: 1
 *                  title:
 *                    type: string
 *                    description: name of the product
 *                    example: 3x3
 *                  type:
 *                    type: string
 *                    description: product type
 *                    example: Puzzle
 *                  describtion:
 *                    type: string
 *                    description: product description
 *                    example: It could have been just another peaceful night in a remote village, near the outskirts of the Dark Forest, but they were interrupted by the vicious howling of the wolves from afar. In a small cabin, a little girl was kneeling beside her bed, praying.
 *                  image:
 *                    type: string
 *                    description: link to product image
 *                    example: https://puzzles.in.ua/image/catalog/goods/KubikRubika/QiYi_MoFangGe/QiDi/QIDI-color.jpg
 *                  price:
 *                    type: integer
 *                    description: product price
 *                    example: 240
 *        500:
 *         description: internal server error
 */
router.get("/:id", ProductController.getOne);

/**
 * @swagger
 * /Products:
 *    post:
 *      summary: Create a new product
 *      tags: [Product]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      responses:
 *        200:
 *          description: The Product was created
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Product'
 */
router.post("/", ProductController.create);

/**
 * @swagger
 * /Products/{id}:
 *    patch:
 *      summary: Update product info by id
 *      tags: [Product]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: The product id
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                    type: string
 *                    description: name of the product
 *                    example: 3x3
 *                type:
 *                    type: string
 *                    description: product type
 *                    example: Puzzle
 *                describtion:
 *                    type: string
 *                    description: product description
 *                    example: It could have been just another peaceful night in a remote village, near the outskirts of the Dark Forest, but they were interrupted by the vicious howling of the wolves from afar. In a small cabin, a little girl was kneeling beside her bed, praying.
 *                image:
 *                    type: string
 *                    description: link to product image
 *                    example: https://puzzles.in.ua/image/catalog/goods/KubikRubika/QiYi_MoFangGe/QiDi/QIDI-color.jpg
 *                price:
 *                    type: integer
 *                    description: product price
 *                    example: 240
 *
 */
router.patch("/:id", ProductController.update);

/**
 * @swagger
 * /Products/{id}:
 *    delete:
 *      summary: remove product by id
 *      tags: [Product]
 *      parameters:
 *        - in: path
 *          name: id
 *          description: id to remove product
 *          required: true
 *          schema:
 *            type: integer
 *      responses:
 *        200:
 *          description: The product was deleted
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: deleted
 *        404:
 *          description: Product not found
 */
router.delete("/:id", ProductController.delete);

module.exports = router;
