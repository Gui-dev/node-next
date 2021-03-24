import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

import { User } from '@modules/users/infra/typeorm/entities/User'
import { Survey } from '@modules/surveys/infra/typeorm/entities/Survey'

@Entity('surveys_users')
export class SurveyUser {
  @PrimaryColumn()
  public readonly id: string

  @Column()
  public readonly user_id: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  public readonly user: User

  @Column()
  public readonly survey_id: string

  @ManyToOne(() => Survey)
  @JoinColumn({ name: 'survey_id' })
  public readonly survey: Survey

  @Column()
  public value: number

  @CreateDateColumn()
  public readonly created_at: Date

  constructor () {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
