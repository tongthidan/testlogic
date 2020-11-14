#include<iostream>
#include<math.h>
using namespace std;
int SNT(long n){
	if(n < 2){
		return 0;
	}
	for(long i = 2 ; i <= sqrt(n); i++){
		if( n% i == 0){
			return 0;
		}
	}
	return 1;
}
main(){
	long n;
	cin>>n;
	if(SNT(n) == 1 ){
		cout<<"YES"<<endl;
	}
	else{
		cout<<"NO"<<endl;
	}


	return 0;
}

