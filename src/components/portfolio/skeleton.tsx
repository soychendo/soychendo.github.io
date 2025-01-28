import React from "react"
import {
  ContainerSkeleton,
  CardWrapper,
  CardImage,
  CardDescription,
  CardButtons
} from './styles'
import { database } from "@database/database";

export const skeleton: Array<number> = []
  for(let i = 1; i <= database.length; i++)
    skeleton.push(i)

export const CardSkeleton = (): JSX.Element => {

  return (
    <ContainerSkeleton>
      <CardWrapper>
        <CardImage />
        <CardDescription />
        <CardButtons />
      </CardWrapper>
    </ContainerSkeleton>
  )
}
