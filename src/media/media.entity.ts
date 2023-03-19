import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Media {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    type: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    url: string;

    @Column({
        default: "active"
    })
    status: string;

    @Column({
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;

    @Column({
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
    })
    updatedAt: Date;

    @Column({
        default: false
    })
    isDeleted: boolean

    @Column({
        nullable: true
    })
    deletedAt: Date;    
}
