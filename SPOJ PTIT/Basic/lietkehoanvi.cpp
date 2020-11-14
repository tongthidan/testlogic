#include<iostream>
#include<math.h>
using namespace std;

int Bool[20] = {0};
int a[20];
int  n, k;
void in(){
	for(int i = 1; i <= n; i++){
		cout<<a[i];
	}
	cout<<endl;
}

void Try(int k) {
    for (int i = 1; i <= n; i++) {
        
        if (!Bool[i]) {
            a[k] = i; 
            Bool[i] = 1;
            if (k == n)
                in();
            else
                Try(k + 1);
            Bool[i] = 0;
        }
    }
}
 
int main() {
    cin >> n;
    Try(1);
}

