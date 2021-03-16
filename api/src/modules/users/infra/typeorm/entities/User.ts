import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('users')
export class User {
  @PrimaryColumn()
  public readonly id: string

  @Column()
  public name: string

  @Column()
  public email: string

  @CreateDateColumn()
  // eslint-disable-next-line camelcase
  public created_at: Date

  constructor () {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
