import {
    Table,
    Column,
    BelongsTo,
    DataType,
    Model,
    ForeignKey,
    PrimaryKey,
    HasMany,
} from "sequelize-typescript"

@Table
export class ProductLine extends Model {
    @PrimaryKey
    @Column
    productLine!: string

    @Column({ type: DataType.STRING(4000), allowNull: true })
    textDescription!: string

    @Column({ type: "mediumtext", allowNull: true })
    htmlDescription!: string

    @Column({ type: "mediumblob", allowNull: true })
    image!: string

    @HasMany(() => Product)
    products!: Product[]
}

@Table
export default class Product extends Model {
    @PrimaryKey
    @Column
    productCode!: string

    @Column({ type: DataType.STRING(70) })
    productName!: string


    @ForeignKey(() => ProductLine)
    productLineId!: string

    @BelongsTo(() => ProductLine)
    productLine!: ProductLine

    @Column({ type: DataType.STRING(10) })
    productScale!: string

    @Column({ type: DataType.STRING(10) })
    productVendor!: string

    @Column({ type: DataType.TEXT })
    productDescription!: string

    @Column({ type: "smallint" })
    quantityInStock!: number

    @Column({ type: DataType.DECIMAL(10, 2) })
    buyPrice!: number

    @Column({ type: DataType.DECIMAL(10, 2) })
    MSRP!: number
}
