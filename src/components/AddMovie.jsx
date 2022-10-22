import React from 'react';
import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import StarRating from './StarRating';

export default function AddMovie(props) {

    const [posterUrl, setPosterUrl] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    return (
        <>
            <form onSubmit={() => props.handleAdd}>
                <h1>Add new movies down below</h1>                
                <div class="form-group">
                    <label for="exampleInputEmail1">Movie's Title</label>
                    <input type="text" value={title} class="form-control" id="movieTitle" 
                        placeholder="Enter Title..." onChange={(e) =>  {
                            e.preventDefault();
                            setTitle(e.target.value)}
                            }/>
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Movie's URL</label>
                    <input type="url" value={posterUrl}  class="form-control" id="InputUrl" 
                    placeholder="URL..." onChange={(e) => {
                                e.preventDefault();
                                setPosterUrl(e.target.value)}
                            }/>
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Movie's Description</label>
                    <textarea type="text" value={description} class="form-control" id="InputUrl" 
                    placeholder="Description..." onChange={(e) => {
                                e.preventDefault();
                                setDescription(e.target.value)}
                            } />
                </div>

                <div>
                    <label>
                        Rate the movie
                        <StarRating />
                    </label>
                </div>

                <button type="submit" class="btn btn-primary" >
                    <FaPlusCircle style={{fontSize: "30px"}} />
                </button>
            </form>
        </>
    )
}
