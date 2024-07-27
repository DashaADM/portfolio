import { SerializedBlockNode } from '@payloadcms/richtext-lexical'
import { AccordionBlock as AccordionBlockType } from '@/payload-types'
import React from 'react'
import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Box,
  SimpleGrid,
  Text,
} from '@mantine/core'
import { serializeLexical } from '../../../serializeLexical'
import { Container } from '@/modules/common/components/Container'

const splitArray = (arr: any) => {
  const middleIndex = Math.ceil(arr.length / 2)
  const firstHalf = arr.slice(0, middleIndex)
  const secondHalf = arr.slice(middleIndex)

  return [firstHalf, secondHalf]
}

export const AccordionBlock: React.FC<{
  node: SerializedBlockNode & { fields: AccordionBlockType }
}> = ({ node }) => {
  const { fields } = node
  const { rows, containerSize, items } = fields
  const columns = splitArray(items)
  return (
    <Container size={containerSize || 'app'}>
      <Accordion>
        {rows === '1' ? (
          items?.map((item) => <AccordionItemBlock key={item?.id} item={item} />)
        ) : rows === '2' ? (
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={{ base: 0, sm: 'md' }}>
            {columns.map((column, index) => (
              <Box key={`column-${index}`}>
                {column.map((item: any) => (
                  <AccordionItemBlock key={item?.id} item={item} />
                ))}
              </Box>
            ))}
          </SimpleGrid>
        ) : null}
      </Accordion>
    </Container>
  )
}

const AccordionItemBlock = async ({ item }: { item: any }) => {
  const serializedContent = serializeLexical(item?.content || undefined, {
    disableContainer: true,
    disableStyles: true,
  })

  return (
    item && (
      <AccordionItem value={item?.id}>
        <AccordionControl>
          <Text>{item?.title}</Text>
        </AccordionControl>
        <AccordionPanel>{serializedContent}</AccordionPanel>
      </AccordionItem>
    )
  )
}
