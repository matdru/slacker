type Optional<T> = T | undefined

interface Room {
	id?: string
	people: any
	name?: string
	roomName: string
	displayName?: string
	messages: any[]
	unread?: any
}

interface Person {
	id: string
	name: string
	lastRead: number
	unread: number
	displayName?: string
}

interface Message {
	id: string
	createdAt: Date
	sender: Auth
	status: boolean
	text: string
}

interface Auth {
	uid?: string
	displayName?: string
}

interface RoomItem {
	id: string
	name: string
	avatarUrl?: string
	people: Person[]
	messages: Message[]
}

interface StoreState {
	auth: Auth
	rooms: {
		joined: RoomItem[]
		available: RoomItem[]
	}
}