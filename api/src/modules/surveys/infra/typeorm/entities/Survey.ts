import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('surveys')
export class Survey {
  @PrimaryColumn()
  public readonly id: string

  @Column()
  public readonly title: string

  @Column()
  public readonly description: string

  @CreateDateColumn()
  // eslint-disable-next-line camelcase
  public readonly created_at: Date

  constructor () {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
