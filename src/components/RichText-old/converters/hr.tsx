import { Separator } from '@/components/ui/separator'
import type { HTMLConverter } from '../types'

import type { SerializedHorizontalRuleNode } from '@lexical/react/LexicalHorizontalRuleNode'

export const HorizontalRuleHTMLConverter: HTMLConverter<SerializedHorizontalRuleNode> = {
  converter() {
    return <Separator className="mt-6" />
  },
  nodeTypes: ['horizontalrule'],
}
