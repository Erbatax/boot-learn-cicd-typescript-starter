import { describe, expect, test } from "vitest"
import { getAPIKey } from "./auth"

const person = {
    isActive: true,
    age: 32,
}

describe("person", () => {
    test("person is defined", () => {
        expect(person).toBeDefined()
    })

    test("is active", () => {
        expect(person.isActive).toBeTruthy()
    })
})


describe("getAPIKey", () => {
    const headers = {
        authorization: "ApiKey 1234567890",
    }

    test("returns api key", () => {
        expect(getAPIKey(headers)).toBe("1234567890")
    })

    test("returns null if authorization header is missing", () => {
        expect(getAPIKey({})).toBeNull()
    })

    test("returns null if authorization header is invalid", () => {
        expect(getAPIKey({ authorization: "Bearer 1234567890" })).toBeNull()
    })
})
