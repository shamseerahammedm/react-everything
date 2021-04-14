import React, { Component } from 'react';



class ContactList extends Component {

    state = {
        contacts : [],
        perPage : 2,
        currentPage : 1,
        totalPages : null,
        itemList  : []
    }

    componentDidMount()
    {
        this.loadContacts();
    }

    // for infinte loading only difference is spreading preiousconatcts ie: contacts : [ ...prevState.contacts, ...contacts.data ],
    loadContacts = async () => {
        const { perPage, currentPage } = this.state;
        const url = `https://reqres.in/api/users?per_page=${perPage}&page=${currentPage}`;
        const contactsLoaded = await fetch(url);
        const contacts = await contactsLoaded.json();
        this.setState((prevState => ({
            contacts : [ ...prevState.contacts, ...contacts.data ],
            totalPages : contacts.total_pages
        })),()=>{
            this.makePaginationItems();
        });
    }
    loadMoreData = () => {
        this.setState(prevState => ({    
            currentPage: prevState.currentPage + 1
        }),this.loadContacts);
    }





    getCurrentPageData = async () => {
        const { perPage, currentPage } = this.state;
        const url = `https://reqres.in/api/users?per_page=${perPage}&page=${currentPage}`;
        const contactsLoaded = await fetch(url);
        const contacts = await contactsLoaded.json();
        this.setState({
            contacts : [ ...contacts.data ],
            totalPages : contacts.total_pages
        },()=>{
            // console.log(contacts);
            this.makePaginationItems();
        })
    }


    navigateToParticularPage = async (pageNumber) => {
        const { perPage } = this.state;
        const url = `https://reqres.in/api/users?per_page=${perPage}&page=${pageNumber}`;
        const contactsLoaded = await fetch(url);
        const contacts = await contactsLoaded.json();
        this.setState({
            contacts : [ ...contacts.data ],
            totalPages : contacts.total_pages,
            currentPage : pageNumber
        },()=>{
            this.makePaginationItems();
        });
    }


    makePaginationItems = ( ) => {
        const { totalPages, currentPage } = this.state;
        const itemData = [];
        for( let i = 1 ; i <= totalPages; i++)
        {
            itemData.push( 
            <div key={i} className="col-1"> 
                <button 
                    onClick={()=>{
                        this.navigateToParticularPage(i)
                    }}
                    className={ currentPage === i ? `btn btn-success` : `btn btn-primary`}
                >
                    {i}
                </button>
            </div>
            )
        }
        this.setState({
            itemList : itemData
        })
    }


    nextPreviousHandler = (nextOrPrevious) => {
        const { currentPage, totalPages } = this.state;
        if(nextOrPrevious === 'next')
        {
            if(currentPage !== totalPages )
            {
                this.setState({
                    currentPage : currentPage+1
                },()=>{
                    this.getCurrentPageData();
                })
            }
        }
        else
        {
            if( currentPage !== 1)
            {
                this.setState({
                    currentPage : currentPage-1
                },()=>{
                    this.getCurrentPageData();
                })
            }
        }
    }



    render() {
        const { contacts, itemList, currentPage } = this.state;
        return (
        <>
            <div className="row">
                {
                    contacts && contacts.map( contactItems => {
                        return (
                            <div key={contactItems.id} className="col-sm-12 border mb-2">
                                {/* <img src={contactItems.avatar} alt="" className="img-fluid"/> */}
                                <p>{contactItems.email}</p>
                                <p>{contactItems.first_name}</p>
                                <p>{contactItems.last_name}</p>
                            </div>
                        );
                    })
                }

                {/* load more starts  */}
                {/* <button className="btn btn-primary" onClick={this.loadMoreData}>Load More</button> */}
            </div>
           

           {/* pagination starts  */}
            <div className="row mt-4">
                <button className="btn btn-danger" onClick={()=>this.nextPreviousHandler('prev')}>Prev</button>
                {itemList}
                <button className="btn btn-danger" onClick={()=>this.nextPreviousHandler('next')}>Next</button>
            </div>
            
        </>
        )
    }
}

export default ContactList;
