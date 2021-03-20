import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('surveys_users')
export class SurveyUser {
  @PrimaryColumn()
  public readonly id: string

  @Column()
  public readonly user_id: string

  @Column()
  public readonly survey_id: string

  @CreateDateColumn()
  public readonly created_at: Date

  constructor () {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
