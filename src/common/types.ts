export type MenuItem = {
    path: string
    title: string
    Component: React.FC | React.FC<(count: number, price: number) => void>
}