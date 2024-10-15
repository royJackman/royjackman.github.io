import { describe, it, expect } from "vitest"

import { renderToString } from "@vue/test-utils"
import FaceCard from "../FaceCard.vue"

describe("FaceCard", () => {
    it('renders properly', () => {
        const wrapper = renderToString(FaceCard, {props: {msg: 'Hello, world!'}})
        wrapper.then((w) => expect(w).toHaveLength(0))
    })
})