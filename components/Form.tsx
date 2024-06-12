"use client"
import Image from 'next/image'
import React, { FormEvent, useState } from 'react'
import { z } from 'zod'

const formSchema = z.object({
    rank: z.number({ required_error: 'Rank must be a number' })
        .min(1, { message: 'Rank must be greater than 0' })
        .max(100, { message: 'Rank must be less than 100' }),
    percentile: z.number({ required_error: 'Percentile must be a number' })
        .min(1, { message: 'Percentile must be greater than 0' })
        .max(100, { message: 'Percentile must be less than 100' }),
    currentScore: z.number({ required_error: 'Current Score must be between 0 & 15' })
        .min(0, { message: 'Current Score must be greater than 0' })
        .max(15, { message: 'Current Score must be less than 15' })
})

type FormSchema = z.infer<typeof formSchema>;

const Form = ({ id }: { id: string }) => {

    const FormAttributes = [
        { index: '1', name: 'rank', label: 'Rank', min: 1, max: 100 },
        { index: '2', name: 'percentile', label: 'Percentile', min: 1, max: 100 },
        { index: '3', name: 'currentScore', label: 'Current Score (out of 15)', min: 0, max: 15 },
    ]

    const formElement = document.getElementById(id);
    if (formElement) {
        formElement.onsubmit = (e) => {
            console.log("submitted");
            console.log(e.target);
        }
    }

    const [formError, setFormError] = useState<z.ZodFormattedError<
        FormSchema,
        string
    > | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);

        const formDataValues = {
            rank: parseInt(formData.get('rank') as string),
            percentile: parseInt(formData.get('percentile') as string),
            currentScore: parseInt(formData.get('currentScore') as string),
        };
        try {
            const parsedFormValue = formSchema.safeParse(formDataValues);

            if (!parsedFormValue.success) {
                const err = parsedFormValue.error.format();
                console.log(err);
                setFormError(err);
                return;
            } else {
                setFormError(null);
            }

            console.log("formdata", parsedFormValue.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form id={id} onSubmit={handleSubmit} method='GET' autoComplete='false' className="flex-center flex-col">
            <div className="flex-between w-full mb-5">
                <h1 className='font-bold text-xl'>Update scores</h1>
                <Image src={"/html.png"} alt='html-icon' width={35} height={35} />
            </div>
            <div className="flex flex-col w-full">
                {FormAttributes.map((attr) => (
                    <div key={attr.index} className="flex-between flex-row w-full my-2 gap-8 text-base">
                        <div className="flex items-center flex-row gap-3">
                            <span className='bg-blue-900 size-6 flex-center text-white rounded-full'>{attr.index}</span>
                            <label htmlFor={attr.name} className='w-max'>Update your{" "}<span className='font-semibold'>{attr.label}</span></label>
                        </div>
                        <input required type="number" min={attr.min} max={attr.max} name={attr.name} className='[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 rounded-lg border-2 border-gray-200 p-2 w-1/3 h-8 font-bold focus:border-blue-900 outline-none' />
                    </div>
                ))}
            </div>
        </form>
    )
}

export default Form