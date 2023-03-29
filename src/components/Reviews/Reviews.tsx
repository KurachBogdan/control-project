import { Card, CardContent, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import Container from '@mui/material/Container/Container'

type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Max',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias earum in laborum laboriosam illum.',
        },
        {
            name: 'Olesya',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, corrupti vel est blanditiis odit tempora maxime. Quis sit tempora culpa accusantium est expedita? Amet beatae nemo modi cupiditate!',
        },
        {
            name: 'Anonim',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis dignissimos eius magni nemo ipsa.',
        },
        {
            name: 'Nicole',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quia.',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required!')
        } else {
            setNewReview({
                name: '',
                text: '',
            })

            setReviews((prevState) => {
                return [...prevState, newReview]
            })
        }
    }

    return (
        <Container maxWidth="lg">
            <Typography variant="h4" component="h2" sx={{ margin: '60px 0' }}>
                Reviews
            </Typography>
            <div>
                {reviews.map((item, i) => (
                    <Card variant="outlined" sx={{ margin: '20px 0' }} key={i}>
                        <CardContent>
                            <div>{item.name}:</div>
                            <div>{item.text}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <form onSubmit={onSend}>
                <h3>Please, leave a review</h3>
                <div>
                    <TextField
                        label="Name"
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        minRows={7}
                        placeholder="Text"
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <Button type="submit" variant="outlined">
                    Send
                </Button>
            </form>
        </Container>
    )
}
export default Reviews