// connect to the db logic in this module (for reviews db obs)

import mongodb from "mongodb";
// when searching by an id, we gave to use this specific variable below (convert the data to this type)
const ObjectId = mongodb.ObjectId;

let reviews;

export default class ReviewsDAO {
    static async injectDB(conn) {
        if (reviews) {
            console.log("[DAO] Already connected to reviews collection.");
            return;
        }
        try {
            reviews = await conn.db("reviews").collection("reviews");
            console.log("[DAO] Connected to reviews collection.");
        } catch (e) {
            console.error(`[DAO] Unable to connect to the db: ${e}`);
        }
    }

    static async addReview(movieId, user, review) {
        try {
            const reviewDoc = { movieId, user, review };
            console.log(`[DAO] Inserting review:`, reviewDoc);
            const result = await reviews.insertOne(reviewDoc);
            console.log(`[DAO] Insert result:`, result);
            return result;
        } catch (e) {
            console.error(`[DAO] Unable to post review: ${e}`);
            return { error: e };
        }
    }

    static async getReviewById(id) {
        try {
            console.log(`[DAO] Fetching review by id: ${id}`);
            const result = await reviews.findOne({ _id: new ObjectId(id) });
            console.log(`[DAO] Fetched review:`, result);
            return result;
        } catch (e) {
            console.error(`[DAO] Unable to get review: ${e}`);
            return { error: e };
        }
    }

    static async updateReview(reviewId, user, newReview) {
        try {
            console.log(`[DAO] Updating reviewId: ${reviewId}, user: ${user}, newReview: ${newReview}`);
            const updateResponse = await reviews.updateOne(
                { _id: new ObjectId(reviewId), user: user },
                { $set: { review: newReview } }
            );
            console.log(`[DAO] Update result:`, updateResponse);
            return updateResponse;
        } catch (e) {
            console.error(`[DAO] Unable to update review: ${e}`);
            return { error: e };
        }
    }

    static async deleteReview(reviewId) {
        try {
            console.log(`[DAO] Deleting reviewId: ${reviewId}`);
            const result = await reviews.deleteOne({ _id: new ObjectId(reviewId) });
            console.log(`[DAO] Delete result:`, result);
            return result;
        } catch (e) {
            console.error(`[DAO] Unable to delete review: ${e}`);
            return { error: e };
        }
    }

    static async getReviewsByMovieId(movieId) {
        try {
            console.log(`[DAO] Fetching reviews by movieId: ${movieId}`);
            const result = await reviews.find({ movieId: movieId }).toArray();
            console.log(`[DAO] Fetched reviews:`, result);
            return result;
        } catch (e) {
            console.error(`[DAO] Unable to get reviews by movieId: ${e}`);
            return { error: e };
        }
    }
}

// all kinds of operations acting on different resources in inter-resource queries made easy through mongo db :D