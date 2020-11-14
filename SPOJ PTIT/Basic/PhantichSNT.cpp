#include<iostream>
#include<math.h>
using namespace std;
int SNT(long n){
	if(n < 2){
		return 0;
	}
	for(int i = 2; i <= sqrt(n); i++){
		if(n % i == 0){
			return 0;
		}
	}
	return 1;
}
main(){
	long long  n;
	cin>>n;
	for(long i = 2; i <= sqrt(n); i++){
		if( n% i == 0 && SNT(i) == 1 ){
			int dem = 0;
			while( n %i == 0){
				dem++;
				n = n/i;
			}
			cout<<i<<" "<<dem<<endl;
		}
	}
	if(n > 1){
		cout<<n<<" 1"<<endl;
	}
	return 0;
}

