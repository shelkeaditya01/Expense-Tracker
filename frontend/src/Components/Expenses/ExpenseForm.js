import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';


function ExpenseForm() {
    const {addExpense, error, setError} = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category,description } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        setError('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        addExpense(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

    return (
        <ExpenseFormStyled onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>}
            <div className="input-control">
                <input 
                    type="text" 
                    value={title}
                    name={'title'} 
                    placeholder="Expense Title"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-control">
                <input value={amount}  
                    type="text" 
                    name={'amount'} 
                    placeholder={'Expense Amount'}
                    onChange={handleInput('amount')} 
                />
            </div>
            <div className="input-control">
                <DatePicker 
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
            </div>
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value="" disabled >Select Option</option>
                    <option value="education">Education</option>
                    <option value="groceries">Groceries</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="takeaways">Takeaways</option>
                    <option value="clothing">Clothing</option>  
                    <option value="travelling">Travelling</option>  
                    <option value="other">Other</option>  
                </select>
            </div>
            <div className="input-control">
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <div className="submit-btn">
                <Button 
                    name={'Add Expense'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                />
            </div>
        </ExpenseFormStyled>
    )
}

const ExpenseFormStyled = styled.form`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    transition: all 0.3s ease;
    
    &:hover {
        box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.12);
    }
    
    .error {
        background: #fee2e2;
        color: #dc2626;
        padding: 0.8rem 1rem;
        border-radius: 10px;
        border: 1px solid #fecaca;
        font-size: 0.9rem;
        font-weight: 500;
        margin: 0;
    }
    
    input, textarea, select{
        font-family: inherit;
        font-size: 0.95rem;
        outline: none;
        border: none;
        padding: 0.9rem 1.2rem;
        border-radius: 12px;
        border: 2px solid #fff;
        background: #fff;
        resize: none;
        box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        transition: all 0.3s ease;
        
        &:focus {
            border-color: var(--color-green);
            box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.1);
            transform: translateY(-1px);
        }
        
        &::placeholder{
            color: rgba(34, 34, 96, 0.4);
            font-size: 0.9rem;
        }
        
        &:hover {
            box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.08);
            transform: translateY(-1px);
        }
    }
    
    .input-control{
        input{
            width: 100%;
        }
        
        label {
            display: block;
            margin-bottom: 0.5rem;
            color: rgba(34, 34, 96, 0.8);
            font-weight: 600;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
    }

    .selects{
        display: flex;
        justify-content: flex-end;
        select{
            color: rgba(34, 34, 96, 0.4);
            cursor: pointer;
            &:focus, &:active{
                color: rgba(34, 34, 96, 1);
            }
        }
    }

    .submit-btn{
        margin-top: 0.8rem;
        button{
            box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.08);
            width: 100%;
            border-radius: 12px !important;
            padding: 1rem 2rem !important;
            font-weight: 600 !important;
            font-size: 0.95rem !important;
            transition: all 0.3s ease !important;
            
            &:hover{
                background: var(--color-green) !important;
                transform: translateY(-2px);
                box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.15);
            }
        }
    }
`;
export default ExpenseForm;