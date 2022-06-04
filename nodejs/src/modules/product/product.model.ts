import {
    Table,
    Column,
    BelongsTo,
    DataType,
    Model,
    ForeignKey,
    PrimaryKey,
    HasMany,
    AllowNull,
} from "sequelize-typescript"

@Table
export class ProductLine extends Model {
    @PrimaryKey
    @Column({ type: DataType.STRING(50) })
    productLine!: string

    @Column({ type: DataType.STRING(4000) })
    textDescription!: string

    @Column({ type: "mediumtext" })
    htmlDescription!: string

    @Column({ type: "mediumblob" })
    image!: string

    @HasMany(() => Product)
    products!: Product[]
}

@Table
export default class Product extends Model {
    @PrimaryKey
    @Column({ type: DataType.STRING(15) })
    productCode!: string

    @AllowNull(false)
    @Column({ type: DataType.STRING(70) })
    productName!: string

    @ForeignKey(() => ProductLine)
    @AllowNull(false)
    @Column({ type: DataType.STRING(50) })
    productLine!: string

    @BelongsTo(() => ProductLine)
    theProductLine!: ProductLine

    @AllowNull(false)
    @Column({ type: DataType.STRING(10) })
    productScale!: string

    @AllowNull(false)
    @Column({ type: DataType.STRING(50) })
    productVendor!: string

    @AllowNull(false)
    @Column({ type: DataType.TEXT })
    productDescription!: string

    @AllowNull(false)
    @Column({ type: DataType.SMALLINT({ precision: 6 }) })
    quantityInStock!: number

    @AllowNull(false)
    @Column({ type: DataType.DECIMAL(10, 2) })
    buyPrice!: number

    @AllowNull(false)
    @Column({ type: DataType.DECIMAL(10, 2) })
    MSRP!: number
}
