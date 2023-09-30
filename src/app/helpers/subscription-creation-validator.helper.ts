import { Subscription } from 'rxjs';

export function shouldSubscriptionBeRereated(sub: Subscription): boolean {
    if (sub !== undefined && !sub.closed) {
        return false;
    }
    if (sub !== undefined) {
        sub.unsubscribe();
    }

    return true;
}
