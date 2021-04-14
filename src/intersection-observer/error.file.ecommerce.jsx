import React, { createRef } from 'react';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item';
import { connect } from 'react-redux';
import { selectCollection, selectCollectionsForPages, selectTestData } from '../../redux/shop/shop.selectors';
import { Row , Col } from 'react-bootstrap';
import { fetchCollectionsForPagesStart, testAction, fetchCollectionsForPagesAsync } from '../../redux/shop/shop.actions';
import { withRouter } from 'react-router-dom';
import { firestore , convertCollectionSnapshotToMap, convertCollectionSnapshotToArray } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';

class CollectionPage extends React.Component {

    constructor()
    {
        super();
        this.state={
            currentPage : 1,
            itemsPerPage : 5,
            collectionRef : firestore.collection("collections"),
            items : [],
            activeStep : 0,
            
        }
        this.lastItemElement = createRef();
    }


    async componentDidMount()
    {
   
        const items = await this.fetchItems();
        console.log(items);
        this.setState({
            items
        })
    }


    fetchItems = async () => {
             // this.fetchCollectionsForThisPage();
             const { fetchCollectionsForPagesStart, match : { params } } = this.props;
             const collectionId = params.collectionId;
             const { currentPage, itemsPerPage } = this.state;
             const startAt = currentPage * itemsPerPage - itemsPerPage;

        try{
            const itemsSnapshot =  await firestore.collection("collections").doc(collectionId).collection(`${collectionId}Collection`).orderBy('id').startAt(startAt).limit(itemsPerPage).get();
            const items = await convertCollectionSnapshotToArray(itemsSnapshot)
            return items;
            // dispatch(fetchCollectionsForPagesSuccess(items))
        }
        catch(err)
        {
            // await dispatch(fetchCollectionsForPagesSuccess(items));
            console.log(err);
        } 
        
    }





    componentDidUpdate(prevProps, prevState)
    {
        if(this.props.collectionsForPages !== prevState.collectionsForPages)
        {
            const lastElement = this.lastItemElement.current;
            let observer = new IntersectionObserver(this.watchTheLastElement, {
                threshold: 1.0
            });
            observer.observe(lastElement);
        }
    }    


    fetchCollectionsForThisPage = () => {
        const { fetchCollectionsForPagesStart, match : { params } } = this.props;
        const collectionId = params.collectionId;
        const { currentPage, itemsPerPage } = this.state;
        const pageData = {
            currentPage, itemsPerPage, collectionId
        }
        console.log("hahaha");
        fetchCollectionsForPagesStart(pageData);
    }






    
    watchTheLastElement = (entries, observer) => {
        const ratio = entries[0].intersectionRatio;
        const { selectTestData } = this.props;
        if(ratio > 0)
        {
            this.setState( prevState => ({
                currentPage : prevState.currentPage + 1
            }), ()=>{
               
                // console.log("!");
                // console.log(this.state.currentPage);
                // selectTestData();
                // this.fetchCollectionsForThisPage();
                // this.fetchItems();
            })
            console.log("fire nowww");
        }
    }

    render()
    {
        // const { collectionsForPages,tester } = this.props
        // const { categoryName } = collectionsForPages;
        // console.log(tester);

        const { items : collectionsForPages } = this.state;

        return (
            <div className='collection-page'>
                {/* <h1>{tester}</h1> */}
                {/* <h2 className="title" >{categoryName}</h2> */}
                <div className="items">
                    
                    <Row>
                        {
                            collectionsForPages.map((item, index) => 
                                <Col key={item.id} xs={12} sm={6} md={3} className="mb-3">
                                    <CollectionItem item={item} />
                                    {
                                        index ===  collectionsForPages.length - 1 && <span ref={this.lastItemElement} className="last-item"/>
                                    }
                                </Col>
                            )
                        }
                        
                    </Row>
                </div>
            </div>
         
        );
    }
}


const mapStateToProps = createStructuredSelector({
    collectionsForPages : selectCollectionsForPages,
    tester : selectTestData
});


// const mapStateToProps = (state, ownProps) => ({
//     collection: selectCollection(ownProps.match.params.collectionId)(state),
//     collectionsForPages : selectCollectionsForPages(collectionsForPages)
// })


const mapDispatchToProps = dispatch => {
    return {
        fetchCollectionsForPagesStart : (pageData) => dispatch(fetchCollectionsForPagesAsync(pageData)),
        selectTestData : () => dispatch(testAction())
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionPage));









// thunk implementation 


import React, { createRef } from 'react';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item';
import { connect } from 'react-redux';
import { selectCollection, selectCollectionsForPages, selectTestData } from '../../redux/shop/shop.selectors';
import { Row , Col } from 'react-bootstrap';
import { fetchCollectionsForPagesStart, testAction, fetchCollectionsForPagesAsync } from '../../redux/shop/shop.actions';
import { withRouter } from 'react-router-dom';
import { firestore , convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';

class CollectionPage extends React.Component {

    constructor()
    {
        super();
        this.state={
            currentPage : 1,
            itemsPerPage : 5,
            collectionRef : firestore.collection("collections")
        }
        this.lastItemElement = createRef();
    }


    componentDidMount()
    {
        this.fetchCollectionsForThisPage();
    }

    componentDidUpdate(prevProps)
    {
        if(this.props.collectionsForPages !== prevProps.collectionsForPages)
        {
            const lastElement = this.lastItemElement.current;
            let observer = new IntersectionObserver(this.watchTheLastElement, {
                threshold: 1.0
            });
            observer.observe(lastElement);
        }
    }    


    fetchCollectionsForThisPage = () => {
        const { fetchCollectionsForPagesStart, match : { params } } = this.props;
        const collectionId = params.collectionId;
        const { currentPage, itemsPerPage } = this.state;
        const pageData = {
            currentPage, itemsPerPage, collectionId
        }
        console.log("hahaha");
        fetchCollectionsForPagesStart(pageData);
    }






    
    watchTheLastElement = (entries, observer) => {
        const ratio = entries[0].intersectionRatio;
        const { selectTestData } = this.props;
        if(ratio > 0)
        {
            this.setState( prevState => ({
                currentPage : prevState.currentPage + 1
            }), ()=>{
               
                // console.log("!");
                // console.log(this.state.currentPage);
                // selectTestData();
                // this.fetchCollectionsForThisPage();
            })
            console.log("firenow");
        }
    }

    render()
    {
        const { collectionsForPages,tester } = this.props
        const { categoryName } = collectionsForPages;
        console.log(tester);

        return (
            <div className='collection-page'>
                <h2 className="title" >{categoryName}</h2>
                <div className="items">
                    
                    <Row>
                        {
                            collectionsForPages.map((item, index) => 
                                <Col key={item.id} xs={12} sm={6} md={3} className="mb-3">
                                    <CollectionItem item={item} />
                                    {
                                        index ===  collectionsForPages.length - 1 && <span ref={this.lastItemElement} className="last-item"/>
                                    }
                                </Col>
                            )
                        }
                        
                    </Row>
                </div>
            </div>
         
        );
    }
}


const mapStateToProps = createStructuredSelector({
    collectionsForPages : selectCollectionsForPages,
    tester : selectTestData
});


// const mapStateToProps = (state, ownProps) => ({
//     collection: selectCollection(ownProps.match.params.collectionId)(state),
//     collectionsForPages : selectCollectionsForPages(collectionsForPages)
// })


const mapDispatchToProps = dispatch => {
    return {
        fetchCollectionsForPagesStart : (pageData) => dispatch(fetchCollectionsForPagesAsync(pageData)),
        selectTestData : () => dispatch(testAction())
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionPage));









// saga implementation


import React, { createRef } from 'react';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item';
import { connect } from 'react-redux';
import { selectCollection, selectCollectionsForPages } from '../../redux/shop/shop.selectors';
import { Row , Col } from 'react-bootstrap';
import { fetchCollectionsForPagesStart } from '../../redux/shop/shop.actions';
import { withRouter } from 'react-router-dom';
import { firestore , convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';

class CollectionPage extends React.Component {

    constructor()
    {
        super();
        this.state={
            currentPage : 1,
            itemsPerPage : 5,
            collectionRef : firestore.collection("collections")
        }
        this.lastItemElement = createRef();
    }


    componentDidMount()
    {
        this.fetchCollectionsForThisPage();
    }

    componentDidUpdate(prevProps)
    {
        if(this.props.collectionsForPages !== prevProps.collectionsForPages)
        {
            const lastElement = this.lastItemElement.current;
            let observer = new IntersectionObserver(this.watchTheLastElement, {
                threshold: 1.0
            });
            observer.observe(lastElement);
        }
    }    


    fetchCollectionsForThisPage = () => {
        const { fetchCollectionsForPagesStart, match : { params } } = this.props;
        const collectionId = params.collectionId;
        const { currentPage, itemsPerPage } = this.state;
        const pageData = {
            currentPage, itemsPerPage, collectionId
        }
        fetchCollectionsForPagesStart(pageData);
    }






    
    watchTheLastElement = (entries, observer) => {
        const ratio = entries[0].intersectionRatio;
        if(ratio > 0)
        {
            this.setState( prevState => ({
                currentPage : prevState.currentPage + 1
            }), ()=>{
                this.fetchCollectionsForThisPage();
            })
        }
    }

    render()
    {
        const { collectionsForPages } = this.props
        const { categoryName } = collectionsForPages;

        console.log(collectionsForPages);

        return (
            <div className='collection-page'>
                <h2 className="title" >{categoryName}</h2>
                <div className="items">
                    
                    <Row>
                        {
                            collectionsForPages.map((item, index) => 
                                <Col key={item.id} xs={12} sm={6} md={3} className="mb-3">
                                    <CollectionItem item={item} />
                                    {
                                        index ===  collectionsForPages.length - 1 && <span ref={this.lastItemElement} className="last-item"/>
                                    }
                                </Col>
                            )
                        }
                        
                    </Row>
                </div>
            </div>
         
        );
    }
}


const mapStateToProps = createStructuredSelector({
    collectionsForPages : selectCollectionsForPages,
});


// const mapStateToProps = (state, ownProps) => ({
//     collection: selectCollection(ownProps.match.params.collectionId)(state),
//     collectionsForPages : selectCollectionsForPages(collectionsForPages)
// })


const mapDispatchToProps = dispatch => {
    return {
        fetchCollectionsForPagesStart : (pageData) => dispatch(fetchCollectionsForPagesStart(pageData))
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionPage));




// reproducting issue


import React, { createRef } from 'react';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item';
import { connect } from 'react-redux';
import { selectCollection, selectCollectionsForPages, selectTestData } from '../../redux/shop/shop.selectors';
import { Row , Col } from 'react-bootstrap';
import { fetchCollectionsForPagesStart, testAction, fetchCollectionsForPagesAsync } from '../../redux/shop/shop.actions';
import { withRouter } from 'react-router-dom';
import { firestore , convertCollectionSnapshotToMap, convertCollectionSnapshotToArray } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';

class CollectionPage extends React.Component {

    constructor()
    {
        super();
        this.state={
            currentPage : 1,
            itemsPerPage : 5,
            collectionRef : firestore.collection("collections"),
            items : [],
            test : 1
        }
        this.lastItemElement = createRef();
    }


    async componentDidMount()
    {
   
        // const items = await this.fetchItems();
        // console.log(items);
        this.setState({
            test : this.state.test + 1
        })
        const lastElement = this.lastItemElement.current;
        let observer = new IntersectionObserver(this.watchTheLastElement, {
            threshold: 1.0
        });
        observer.observe(lastElement);
    }


    // fetchItems = async () => {
    //          // this.fetchCollectionsForThisPage();
    //          const { fetchCollectionsForPagesStart, match : { params } } = this.props;
    //          const collectionId = params.collectionId;
    //          const { currentPage, itemsPerPage } = this.state;
    //          const startAt = currentPage * itemsPerPage - itemsPerPage;

    //     try{
    //         const itemsSnapshot =  await firestore.collection("collections").doc(collectionId).collection(`${collectionId}Collection`).orderBy('id').startAt(startAt).limit(itemsPerPage).get();
    //         const items = await convertCollectionSnapshotToArray(itemsSnapshot)
    //         return items;
    //         // dispatch(fetchCollectionsForPagesSuccess(items))
    //     }
    //     catch(err)
    //     {
    //         // await dispatch(fetchCollectionsForPagesSuccess(items));
    //         console.log(err);
    //     } 
        
    // }





    componentDidUpdate(prevProps, prevState)
    {
        if(this.props.collectionsForPages !== prevState.collectionsForPages)
        {
            const lastElement = this.lastItemElement.current;
            let observer = new IntersectionObserver(this.watchTheLastElement, {
                threshold: 1.0
            });
            observer.observe(lastElement);
        }
    }    


    fetchCollectionsForThisPage = () => {
        const { fetchCollectionsForPagesStart, match : { params } } = this.props;
        const collectionId = params.collectionId;
        const { currentPage, itemsPerPage } = this.state;
        const pageData = {
            currentPage, itemsPerPage, collectionId
        }
        console.log("hahaha");
        fetchCollectionsForPagesStart(pageData);
    }






    
    watchTheLastElement = (entries, observer) => {
        const ratio = entries[0].intersectionRatio;
        const { selectTestData } = this.props;
        if(ratio > 0)
        {
            this.setState( prevState => ({
                currentPage : prevState.currentPage + 1
            }), ()=>{
               
                // console.log("!");
                // console.log(this.state.currentPage);
                // selectTestData();
                // this.fetchCollectionsForThisPage();
                // this.fetchItems();
            })
            console.log("fire nowww");
        }
    }

    render()
    {
        // const { collectionsForPages,tester } = this.props
        // const { categoryName } = collectionsForPages;
        // console.log(tester);

        const { items : collectionsForPages } = this.state;

        return (
            // <div className='collection-page'>
            //     {/* <h1>{tester}</h1> */}
            //     {/* <h2 className="title" >{categoryName}</h2> */}
            //     <div className="items">
                    
            //         <Row>
            //             {
            //                 collectionsForPages.map((item, index) => 
            //                     <Col key={item.id} xs={12} sm={6} md={3} className="mb-3">
            //                         <CollectionItem item={item} />
            //                         {
            //                             index ===  collectionsForPages.length - 1 && <span ref={this.lastItemElement} className="last-item"/>
            //                         }
            //                     </Col>
            //                 )
            //             }
                        
            //         </Row>
            //     </div>
            // </div>

            <>
                <div className="box">

                </div>
                <span ref={this.lastItemElement} className="last-item"/>
            </>

         
        );
    }
}


const mapStateToProps = createStructuredSelector({
    collectionsForPages : selectCollectionsForPages,
    tester : selectTestData
});


// const mapStateToProps = (state, ownProps) => ({
//     collection: selectCollection(ownProps.match.params.collectionId)(state),
//     collectionsForPages : selectCollectionsForPages(collectionsForPages)
// })


const mapDispatchToProps = dispatch => {
    return {
        fetchCollectionsForPagesStart : (pageData) => dispatch(fetchCollectionsForPagesAsync(pageData)),
        selectTestData : () => dispatch(testAction())
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionPage));